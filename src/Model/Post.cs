using System;

namespace Blog.Posts
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Abstract { get; set; }
        public string Slug { get; set; }
        public DateTime PublishingDate { get; set; }
        public bool IsPublished { get; set; }
        public PostCategory Category { get; set; }

        public Post()
        {
            IsPublished = true;
        }
    }
}
