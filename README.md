# AIO2025 Learning Progress Blog

A collaborative learning progress blog built with Python and MkDocs Material for tracking weekly progress through an online course.

## 🎯 Project Overview

This blog serves as a centralized platform for your team to document and track weekly learning progress, challenges, takeaways, and goals from the AIO2025 course.

## ✨ Features

- **Weekly Progress Summaries**: Structured posts covering what was learned, challenges faced, key takeaways, next goals, and resources
- **Module-Based Organization**: Content organized by course modules/sections for easy navigation
- **Search Functionality**: Find specific topics across all weekly summaries
- **Team Collaboration**: Multiple team members can contribute to the same repository
- **GitHub Pages Deployment**: Easy deployment and team collaboration
- **MkDocs Material Theme**: Beautiful, modern design with excellent documentation features

## 🏗️ Technical Stack

- **Static Site Generator**: MkDocs
- **Theme**: MkDocs Material
- **Content Format**: Markdown
- **Version Control**: Git
- **Hosting**: GitHub Pages
- **Python Dependencies**: See `requirements.txt`

## 📁 Project Structure

```
AIO2025-Journey/
├── docs/                          # Documentation source
│   ├── index.md                   # Homepage
│   ├── modules/                   # Course modules
│   │   ├── module-1/             # Module 1 content
│   │   │   ├── week-1.md         # Week 1 summary
│   │   │   ├── week-2.md         # Week 2 summary
│   │   │   └── index.md          # Module 1 overview
│   │   ├── module-2/             # Module 2 content
│   │   └── ...                   # Additional modules
│   ├── templates/                 # Weekly post templates
│   │   └── weekly-template.md    # Standard weekly post template
│   └── assets/                    # Images, files, etc.
├── mkdocs.yml                     # MkDocs configuration
├── requirements.txt                # Python dependencies
├── .github/                       # GitHub Actions for deployment
│   └── workflows/
│       └── deploy.yml
└── README.md                      # This file
```

## 📝 Content Structure

### Weekly Summary Template
Each weekly post follows this standardized structure:

1. **What We Learned** - Key concepts and topics covered
2. **Challenges Faced** - Difficulties encountered and how they were overcome
3. **Key Takeaways** - Main insights and learnings
4. **Next Week's Goals** - Planned learning objectives
5. **Resources** - Links to course materials, documentation, etc.

### File Naming Convention
- Module files: `module-{number}/`
- Weekly posts: `week-{number}.md`
- Example: `module-1/week-1.md`

## 🚀 Setup & Installation

### Prerequisites
- Python 3.8+
- Git
- GitHub account

### Local Development
1. Clone the repository
2. Install dependencies: `pip install -r requirements.txt`
3. Run locally: `mkdocs serve`
4. View at: `http://localhost:8000`

### Building for Production
```bash
mkdocs build
```

## 🌐 Deployment

### GitHub Pages Setup
1. Repository settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` (or `main` with `/docs` folder)
4. Folder: `/ (root)` or `/docs`

### Automated Deployment
- GitHub Actions workflow automatically builds and deploys on push to main branch
- No manual deployment required

## 👥 Team Collaboration

### Workflow
1. Create feature branch for new weekly post
2. Write content following the template structure
3. Commit and push changes
4. Create pull request for review
5. Merge to main branch
6. Automatic deployment to GitHub Pages

### Guidelines
- Follow the standardized weekly post template
- Use consistent formatting and structure
- Include relevant tags and categories
- Update module index files when adding new content

## 🔧 Configuration

### MkDocs Configuration (`mkdocs.yml`)
- Site name: AIO2025
- Theme: Material
- Navigation structure by modules
- Search functionality enabled
- Social links and repository information

### Customizations
- [ ] Course syllabus integration
- [ ] External resource links
- [ ] Team member information
- [ ] Custom styling/branding
- [ ] Additional plugins as needed

## 📚 Content Guidelines

### Writing Style
- Clear and concise
- Focus on actionable insights
- Include code examples when relevant
- Use images/diagrams to illustrate concepts

### Weekly Post Process
1. Review course materials for the week
2. Identify key learning points
3. Document challenges and solutions
4. Reflect on takeaways
5. Plan next week's objectives
6. Gather relevant resources and links

## 🔍 Search & Navigation

### Search Features
- Full-text search across all content
- Search by module, week, or topic
- Highlighted search results
- Search suggestions

### Navigation Structure
- Homepage with overview
- Module-based organization
- Weekly progress timeline
- Tag-based filtering
- Archive of completed weeks

## 🎨 Customization Options

### Theme Customization
- Color scheme and branding
- Custom CSS for specific styling
- Logo and favicon
- Typography and spacing

### Content Enhancements
- Admonitions for important notes
- Code blocks with syntax highlighting
- Tables for structured data
- Tabs for organizing related content
- Diagrams and charts

## 📈 Future Enhancements

### Potential Features
- Progress tracking dashboard
- Learning analytics
- Integration with course platforms
- Team member progress visualization
- Export functionality (PDF, etc.)
- Comment system for discussions

## 🤝 Contributing

### Getting Started
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `mkdocs serve`
5. Submit a pull request

### Code of Conduct
- Be respectful and collaborative
- Follow established templates and guidelines
- Test changes before submitting
- Provide clear commit messages

## 📞 Support & Resources

### Documentation
- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [GitHub Pages Guide](https://pages.github.com/)

### Team Resources
- [ ] Course syllabus and materials
- [ ] External learning resources
- [ ] Team communication channels
- [ ] Progress tracking tools

## 📄 License

[Add your license information here]

---

**AIO2025 Learning Journey** - Built with ❤️ using MkDocs Material 