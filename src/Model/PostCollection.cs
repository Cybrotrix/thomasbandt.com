using System.Collections.Generic;

namespace Blog.Model
{
    public class PostCollection : List<Post>
    {
        public bool HasPreviousPage { get; set; }
        public bool HasNextPage { get; set; }

        public int PreviousPage { get; set; }
        public int NextPage { get; set; }

        public PostCollection(IEnumerable<Post> posts)
        {
            AddRange(posts);
        }
    }
}
