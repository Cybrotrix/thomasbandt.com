using System.Linq;

namespace Blog.Model
{
    public interface IPosts
    {
        Post[] All();
        IOrderedEnumerable<IGrouping<int, Post>> Archive();
    }
}
