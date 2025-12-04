## Install Node.js and npm

Next.js requires Node.js ≥ 18.x. npm comes bundled with Node.js.

On Linux (Ubuntu/Debian):
```bash
# Update packages
sudo apt update

# Install Node.js 20.x (recommended latest LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Check versions
node -v
npm -v
```
On Windows:
1. Go to [Node.js official website](https://nodejs.org/en)
2. Download and install LTS version (recommended).
3. Open Command Prompt or PowerShell:
```bash
node -v
npm -v
```
On MacOS:
```# Using Homebrew
brew install node

# Check versions
node -v
npm -v
bash
```
## Clone your project

```bash
git clone https://github.com/armsho/academic.git
cd academic
```
## Install project dependencies

After cloning, run:
```bash
npm install
```

This will read package.json and install:

<ol>
<li>Next.js (App Router, React framework)</li>
<li>React and React-DOM</li>
<li>Tailwind CSS (for styling)</li>
<li>React Icons</li>
<li>Any other npm packages you have in `package.json`.</li>
</ol>

After this, you should have a `node_modules/` folder in your project.






















