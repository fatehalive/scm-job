const { exec } = require('node:child_process');
const fs = require('node:fs');
const terser = require('terser');
const { glob } = require('glob');

exec('tsc', async (err, stdout, stderr) => {
  if (err) {
    console.error(`Error Exec tsc command: ${err}`);
    return;
  }

  try {
    // Gunakan fungsi `glob` dengan callback untuk mendapatkan file yang cocok
    const files = await glob("dist/**/*.js");

    for (const file of files) {
      const code = fs.readFileSync(file, "utf8");
      try {
        // Minify
        const minified = await terser.minify(code);
        fs.writeFileSync(file, minified.code);
        console.log(`File minified: ${file}`);
      } catch (err) {
        console.error(`Error minifying ${file}:`, err);
      }
    }
  } catch (error) {
    console.error(`Error reading ${file}:`, readErr);
  }


  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
