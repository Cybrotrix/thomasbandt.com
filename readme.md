# Simple Blog

## Public Pages

### Index ✓
Lists all posts descending by date. Uses pagination to display a maximum of 10 posts at once on a page. Displays the title and the abstract for each post.

### Detail ✓
Provides the title and the content of a post.

### Archive ✓
Displays a full overview of all posts ever published grouped by the years they have been created.

### About ✓
A static page with the bio of the author and contact information.

### RSS Feed
Provides a feed containing the latest articles.

## Backend

### Login ✓
The page everyone unauthorized accessing the backend is forwarded to. Provides a simple login form that matches a user name and a password with data from a local configuration source.

### Overview ✓
Once logged in, this is the central place of the backend where all posts are listed, sorted by creation date descending. By click one can access the edit form of a single post.

### Create and Edit Form ✓
A simple form for filling in the needed information of a blog post. The content is being formatted with Markdown, a live preview of the HTML result is provided instantly on the screen. By saving the HTML is stored next to the Markdown version, too.

### Assets ✓
A list of all assets which have been uploaded to a specific directory. The data source for this list is the collection of files in that directory, no database reference needed. New files can be uploaded, too.

## Model

### Post ✓
- Title : String
- Abstract : String
- Content : String
- ContentHtml : String
- Published : Boolean
- DateCreated : Date

## Installation

Node packages are used globally, so you can use `npm install` in the root directory.

Bower packages however are installed seperately in both /admin and /blog. So you have to run `bower install` in both directories.