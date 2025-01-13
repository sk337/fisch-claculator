module.exports = {
    meta: {
      type: "suggestion",
      docs: {
        description: "Enforce importing from $/* instead of @/fisch/*",
        category: "Best Practices",
        recommended: false,
      },
      messages: {
        useDollarImport: "Use imports from `$/*` instead of `@/fisch/*`.",
      },
      schema: [], // No options
      fixable: "code", // The rule can fix imports
    },
    create(context) {
      return {
        ImportDeclaration(node) {
          const importSource = node.source.value;
          if (importSource.startsWith("@/fisch/")) {
            const fixedImport = importSource.replace(/^@\/fisch\//, "$/");
            context.report({
              node,
              messageId: "useDollarImport",
              fix(fixer) {
                return fixer.replaceText(node.source, `"${fixedImport}"`);
              },
            });
          }
        },
      };
    },
  };
  