import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react-hooks/exhaustive-deps": "off",  // Desabilita a verificação de dependências do useEffect
      "@typescript-eslint/no-explicit-any": "off",  // Desabilita o aviso sobre o tipo 'any'
    },
  },
];

export default eslintConfig;
