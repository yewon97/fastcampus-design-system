import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/index.js"],
  bundle: true,
  minify: true,
  format: "cjs",
  outfile: "dist/index.js",
});
