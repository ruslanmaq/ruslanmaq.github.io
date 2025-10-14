# Quick Start Guide

Get your portfolio up and running in 15 minutes!

## Step 1: View Your Portfolio (2 minutes)

**Option A: Double-click to open**
1. Navigate to `D:\_repo\portfolio-website\`
2. Double-click `index.html`
3. Your portfolio opens in your default browser

**Option B: Use a local server (recommended)**
```bash
# Using Python (if installed)
cd D:\_repo\portfolio-website
python -m http.server 8000

# Then open: http://localhost:8000
```

## Step 2: Personalize Essential Info (5 minutes)

### Update Your Name
1. Open `index.html` in your code editor
2. Search for "Your Name" (Ctrl+F / Cmd+F)
3. Replace all instances with your actual name

### Update Contact Links
1. In `index.html`, find the contact section (around line 214)
2. Update:
   - GitHub: Replace `yourusername` with your GitHub username
   - LinkedIn: Replace `yourusername` with your LinkedIn profile name
   - Email: Replace `your.email@example.com` with your email

### Update GitHub Links in Projects
1. Open `script.js`
2. Find the `projects` array (line 4)
3. For each project, update `githubUrl`:
   ```javascript
   githubUrl: "https://github.com/YOUR-ACTUAL-USERNAME/repository-name"
   ```

## Step 3: Customize Your Bio (3 minutes)

1. Open `index.html`
2. Find the About section (around line 86)
3. Rewrite the 3 paragraphs to tell your story:
   - Who you are and what you do
   - Your technical approach and key projects
   - Your interests and continuous learning

## Step 4: Test Everything (3 minutes)

Open your portfolio and check:
- [ ] Your name appears everywhere (not "Your Name")
- [ ] Theme toggle works (click moon/sun icon)
- [ ] Mobile menu works (resize browser or test on phone)
- [ ] All navigation links scroll smoothly
- [ ] Contact links go to your profiles
- [ ] Projects display correctly

## Step 5: Deploy to GitHub Pages (2 minutes)

### First-time Setup
```bash
# In the portfolio-website folder
git init
git add .
git commit -m "Initial portfolio commit"
```

### Create GitHub Repository
1. Go to github.com and create a new repository
2. Name it `portfolio` or `yourusername.github.io`
3. Don't initialize with README (we have files already)

### Push Your Code
```bash
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

### Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select `main` branch
4. Click **Save**
5. Wait 1-2 minutes
6. Visit `https://yourusername.github.io/portfolio`

**Done! Your portfolio is live!**

---

## What to Do Next

### Immediate Actions
1. Share portfolio link on LinkedIn
2. Add link to your resume
3. Update email signature with portfolio link

### Within 1 Week
1. Work through `CUSTOMIZATION_CHECKLIST.md` for detailed personalization
2. Create social preview image (1200x630px) for better sharing
3. Add portfolio link to LinkedIn Featured section
4. Improve project READMEs on GitHub

### Within 1 Month
1. Add more projects as you build them
2. Gather feedback from peers
3. Optimize content based on feedback
4. Consider adding a blog section

---

## Troubleshooting

**Projects not showing?**
- Open browser console (F12) and check for JavaScript errors
- Verify `script.js` is in the same folder as `index.html`

**Links not working?**
- Check that you updated the URLs correctly
- Verify GitHub username and repository names are correct

**Theme toggle not working?**
- Clear browser cache
- Check browser console for errors

**Mobile menu not working?**
- Ensure `script.js` is loaded
- Try refreshing the page

---

## Need More Help?

- **Detailed customization**: See `CUSTOMIZATION_CHECKLIST.md`
- **Deployment options**: See `README.md`
- **Code comments**: All files have detailed comments

---

## Quick Tips for Success

1. **Keep it simple**: Don't overcomplicate. This portfolio is designed to be clean and professional.

2. **Quality over quantity**: 3-5 strong projects are better than 10 mediocre ones.

3. **Tell a story**: For each project, explain the problem you solved and the impact you made.

4. **Keep it updated**: Add new projects and skills as you grow.

5. **Get feedback**: Share with trusted peers and iterate based on their input.

6. **Mobile matters**: 60% of views will be on mobile - test thoroughly!

7. **LinkedIn integration**: Your portfolio and LinkedIn should work together, not compete.

---

**You're ready to impress! Good luck with your job search!**
