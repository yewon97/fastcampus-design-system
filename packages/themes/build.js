import run from "@fastcampus/esbuild-config";
import pkg from "./package.json" with { type: "json" };

run({
  pkg,
});
