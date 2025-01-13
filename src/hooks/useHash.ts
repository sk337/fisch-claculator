"use client";

import { useState, useEffect, useCallback } from "react";
import superjson from "superjson";

const encode: (str: string) => string = encodeURIComponent;
const decode: (str: string) => string = decodeURIComponent;

function parseHash(): Record<string, unknown> {
  if (typeof window === "undefined") return {};
  try {
    const hashContent = window.location.hash.slice(1);
    const decodedHash = decode(hashContent);
    return superjson.parse(decodedHash) || {};
  } catch {
    return {};
  }
}

function stringifyHash(obj: Record<string, unknown>): string {
  const jsonString = superjson.stringify(obj);
  return "#" + encode(jsonString);
}

export function useHash<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(() => {
    const hash = parseHash();
    return (hash[key] as T) ?? initialValue;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = parseHash();
      setState((hash[key] as T) ?? initialValue);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [key, initialValue]);

  const setHash = useCallback(
    (value: T) => {
      const hash = parseHash();
      hash[key] = value;
      window.location.hash = stringifyHash(hash);
      setState(value);
    },
    [key]
  );

  return [state, setHash];
}
