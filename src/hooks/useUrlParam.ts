import { useState, useEffect, useMemo } from "react";

/**
 * A custom hook to manage URL query parameters as state.
 * @param key The query parameter key to manage.
 * @param defaultValue The default value if the query parameter is not present.
 * @returns A tuple with the current value and a setter function.
 */
function useQueryParamState<T>(key: string, defaultValue: T) {
  // Helper to parse query params from the URL
  const getQueryParams = () => {
    return new URLSearchParams(window.location.search);
  };

  // Memoized query param value to ensure type safety
  const paramValue = useMemo(() => {
    const searchParams = getQueryParams();
    const value = searchParams.get(key);
    if (value === null) return defaultValue;

    try {
      return JSON.parse(value) as T;
    } catch {
      console.warn(`Invalid query param value for key "${key}". Falling back to default value.`);
      return defaultValue;
    }
  }, [key, defaultValue]);

  // State management wrapper
  const [state, setState] = useState<T>(paramValue);

  useEffect(() => {
    // Keep URL in sync with state
    const value = state === defaultValue ? null : JSON.stringify(state);
    const searchParams = getQueryParams();

    if (value === null) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [state, key, defaultValue]);

  return [state, setState] as const;
}

export default useQueryParamState;
