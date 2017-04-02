using System;
using System.Linq;

namespace Blog.Model
{
    public class Posts : IPosts
    {
        private const int PageSize = 10;

        private static readonly Post[] _posts;

        static Posts()
        {
            _posts = new []
            {
                new Post
                {
                    Id = 1,
                    Title = "How to run a website on nginx with a SSL certificate from PositiveSSL",
                    Abstract = "Offering a secure connection has not only become a good practice in the previous years, but also a ranking signal for Google lately. Here is a short guide on how to install a cheap but solid certificate on nginx.",
                    Slug = "how-to-run-a-website-on-nginx-with-a-ssl-certificate-from-positivessl",
                    PublishingDate = new DateTime(2015, 1, 12)
                },
                new Post
                {
                    Id = 2,
                    Title = "Hosting Node.js and MongoDB",
                    Abstract = "After digging into web development with Node.js the last couple of months I had to choose where to host this blog, which I had decided to rewrite and run with Node as a result of my research.",
                    Slug = "hosting-nodejs-and-mongodb",
                    PublishingDate = new DateTime(2015, 1, 13)
                },
                new Post
                {
                    Id = 3,
                    Title = "Is Node.js better than ASP.NET?",
                    Abstract = "Coming a long way down the Microsoft Bubble Avenue and being a Microsoft MVP for ASP.NET since 2006, I always felt productive with my personal stack.",
                    Slug = "is-nodejs-better-than-aspnet",
                    PublishingDate = new DateTime(2015, 1, 16)
                },
                new Post
                {
                    Id = 4,
                    Title = "Startup Lesson Learned: Think About Your Shares",
                    Abstract = "Giving away shares of your company too early or too much is a dangerous and often irreversible thing. You should think twice before offering shares or accepting deals where you pay with them.",
                    Slug = "startup-lesson-learned-think-about-your-shares",
                    PublishingDate = new DateTime(2015, 1, 23)
                },
                new Post
                {
                    Id = 5,
                    Title = "Startup Lesson Learned: Technology Doesn’t Matter",
                    Abstract = "I once read a nice quote which nails it and which read as follows: “It’s not the tools you use that have to be cutting-edge, it is the product you build.”",
                    Slug = "startup-lesson-learned-technology-doesnt-matter",
                    PublishingDate = new DateTime(2015, 1, 27)
                },
                new Post
                {
                    Id = 6,
                    Title = "TDD Is A Tool, Not A Religion",
                    Abstract = "People talking about Test Driven Development often split into two camps: fundamentalists, preaching no line of code should be written without a test, and deniers, refusing to use TDD at all.",
                    Slug = "tdd-is-a-tool-not-a-religion",
                    PublishingDate = new DateTime(2015, 2, 2)
                },
                new Post
                {
                    Id = 7,
                    Title = "Developing iOS Views: Custom Code And XIB",
                    Abstract = "While developing native mobile applications for iOS you generally have two options for creating (reusable) visual elements: writing them by hand or designing them visually with the Xcode Interface Builder.",
                    Slug = "developing-ios-views-custom-code-and-xib",
                    PublishingDate = new DateTime(2015, 2, 9),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 8,
                    Title = "Startup Lesson Learned: The Minimum Lovable Product Is King",
                    Abstract = "Many people in the startup industry are talking about the ‘MVP’ – the Minimum Viable Product. But that term is useless unless you figure out what viable means to your customers.",
                    Slug = "startup-lesson-learned-the-minimum-lovable-product-is-king",
                    PublishingDate = new DateTime(2015, 2, 25)
                },
                new Post
                {
                    Id = 9,
                    Title = "Simple Feature Toggles For Xamarin Apps (And Everything Else)",
                    Abstract = "I consider continuous delivery a cool thing, particularly but not only in mobile app projects. It's nice to have the client see and touch new features as soon as they're ready. But sometimes it could be useful to disable those features. This is when Feature Toggles come into play.",
                    Slug = "simple-feature-toggles-for-xamarin-apps-and-everything-else",
                    PublishingDate = new DateTime(2015, 3, 9),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 10,
                    Title = "Xamarin.iOS Memory Pitfalls",
                    Abstract = "One of the huge benefits of using Xamarin for developing cross-platform applications is clearly C#. But that often leads to bad coding practices which can put your app in jeopardy.",
                    Slug = "xamarinios-memory-pitfalls",
                    PublishingDate = new DateTime(2015, 4, 13),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 11,
                    Title = "Startup Lesson Learned: Get Out Now!",
                    Abstract = "Everyone is talking about that Zuckerberg mantra \"Move fast and break things\" – but let's face it: It is much easier said than done.",
                    Slug = "startup-lesson-learned-get-out-now",
                    PublishingDate = new DateTime(2015, 4, 29)
                },
                new Post
                {
                    Id = 12,
                    Title = "How To Check Network Reachability With Xamarin.iOS on iOS 8",
                    Abstract = "Some features of your app may only be useful if the device of your user is currently connected to the internet, so you can make API calls, load images or do some other stuff.",
                    Slug = "how-to-check-network-reachability-with-xamarinios-on-ios-8",
                    PublishingDate = new DateTime(2015, 5, 15),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 13,
                    Title = "How To Enable Dynamic Row Heights With UITableViews On iOS 8 And Later",
                    Abstract = "One of the rather annoying things of developing native iOS apps has always been a relatively common task: Displaying data with a varying size in UITableViews. Since iOS 8 it is easier than ever before – once you know the trick.",
                    Slug = "how-to-enable-dynamic-row-heights-with-uitableviews-on-ios-8-and-later",
                    PublishingDate = new DateTime(2015, 6, 14),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 14,
                    Title = "Join Me At Developer Open Space 2015 in Leipzig",
                    Abstract = "I'm not a guy you are likely to meet at a classical tech conference. I don't like to waste my time with marketing bullshit and presentations of unprepared speakers. But I do like to meet like-minded people, good conversations, and some Schnitzel and beer.",
                    Slug = "join-me-at-developer-open-space-2015-in-leipzig",
                    PublishingDate = new DateTime(2015, 9, 28)
                },
                new Post
                {
                    Id = 15,
                    Title = "When 4K Isn't Enough Anymore",
                    Abstract = "Six months ago I made a serious mistake: I replaced my beloved MacBook Air with a MacBook Pro. In the period that followed I tried to be strong, but eventually I gave up last week. Now I am running my best hardware setup ever.",
                    Slug = "when-4k-isnt-enough-anymore",
                    PublishingDate = new DateTime(2015, 10, 6)
                },
                new Post
                {
                    Id = 16,
                    Title = "Developer Walk – A Great Idea Put Into Practice",
                    Abstract = "Three weeks ago the (probably) first official Developer Walk took place in Dresden, the lovely capital of Saxony in Germany – an event that should and will be repeated.",
                    Slug = "the-developer-walk-a-great-idea-put-into-practice",
                    PublishingDate = new DateTime(2015, 10, 9)
                },
                new Post
                {
                    Id = 17,
                    Title = "Automate All The Things: Distributing Xamarin iOS Apps To The AppStore And TestFlight Without Pain",
                    Abstract = "Everyone who has already built and shipped an iOS app to the AppStore knows the pain. That awful feeling when dealing with provisioning profiles, development and distribution certificates.",
                    Slug = "automate-all-the-things-distributing-xamarin-ios-apps-to-the-appstore-and-testflight-without-pain",
                    PublishingDate = new DateTime(2015, 11, 27),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 18,
                    Title = "A Nicer Messaging Interface For Xamarin.Forms",
                    Abstract = "Xamarin.Forms provides cross-platform messaging capabilities for Android, iOS and Windows Phone with its MessagingCenter – but in a really strange fashion. I thought there must be a simpler way.",
                    Slug = "a-nicer-messaging-interface-for-xamarinforms",
                    PublishingDate = new DateTime(2016, 1, 18),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 19,
                    Title = "Announcing MvvmNano – An MVVM Framework Tailored For Xamarin.Forms",
                    Abstract = "When digging around Xamarin.Forms over the past holidays I almost accidentally created a new MVVM Framework. Here is the story behind.",
                    Slug = "announcing-mvvmnano-a-mvvm-framework-tailored-for-xamarinforms",
                    PublishingDate = new DateTime(2016, 2, 12),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 20,
                    Title = "I am Hiring A Xamarin Developer: Make Apps Great Again!",
                    Abstract = "I am looking for our sixth team member who will work with us on a large iOS app and other cross-platform apps for both iOS and Android. Location: Munich,  working 100% remote is possible. Interested? Read on.",
                    Slug = "im-hiring-a-xamarin-developer-make-apps-great-again",
                    PublishingDate = new DateTime(2016, 4, 19),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 21,
                    Title = "Build Your Xamarin App For iOS Once, Deploy It Twice – Both To Your Testers And To The AppStore.",
                    Abstract = "The ordinary process of building and shipping an (iOS) app often includes at least two builds: The first for your internal tests, the second for the public (AppStore). That's somewhat less than perfect and we can do better.",
                    Slug = "build-your-xamarin-app-for-ios-once-deploy-it-twice-both-to-your-testers-and-to-the-appstore",
                    PublishingDate = new DateTime(2016, 5, 14),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 22,
                    Title = "You Need To Think In Versions For Your Software? A Good Place To Start Is Git.",
                    Abstract = "Today it is often common to just deploy updates as they are ready to go. But if that's not possible you need to plan and manage versions thoroughly. Starting with this right in Git can make things really fast and easy.",
                    Slug = "you-need-to-think-in-versions-for-your-software-a-good-place-to-start-is-git",
                    PublishingDate = new DateTime(2016, 12, 1),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 23,
                    Title = "Back To Sender: Some Thoughts On The MacBook Pro 13\" 2016",
                    Abstract = "There has been written a lot about the new 2016 MacBook Pro models. Albeit those reviews often include fundamental criticism, I made the decision to not cancel my order and give it a try anyway. But the experiment didn't last long.",
                    Slug = "back-to-sender-some-thoughts-on-the-macbook-pro-13-2016",
                    PublishingDate = new DateTime(2016, 12, 5),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 24,
                    Title = "Certificate And Public Key Pinning With Xamarin",
                    Abstract = "Are you securing the communication between your app and its backend with HTTPS (SSL/TLS)? Fantastic. But how do you make sure the other side is authentic? Read on on how to do this with Xamarin for iOS and Android.",
                    Slug = "certificate-and-public-key-pinning-with-xamarin",
                    PublishingDate = new DateTime(2017, 1, 31),
                    Category = PostCategory.Xamarin
                },
                new Post
                {
                    Id = 25,
                    Title = "Moving From Node.js To ASP.NET Core",
                    Abstract = "In late 2014 I made the decision to leave ASP.NET behind and give Node.js a try. Fast forward two years and I am back in my beloved .NET environment but still developing on macOS and able to host on Linux.",
                    Slug = "moving-from-nodejs-to-aspnet-core",
                    PublishingDate = new DateTime(2017, 4, 2)
                }
            };
        }

        public Post[] Published()
        {
            return _posts
                .Where(p => p.IsPublished)
                .OrderByDescending(p => p.PublishingDate)
                .ToArray();
        }

        public IOrderedEnumerable<IGrouping<int, Post>> Archive()
        {
            return Published()
                .GroupBy(p => p.PublishingDate.Year)
                .OrderByDescending(g => g.Key);
        }

        public Post SingleOrDefault(string slug)
        {
            return Published()
                .SingleOrDefault(p => p.Slug.Equals(slug, StringComparison.OrdinalIgnoreCase));
        }

        public PostCollection Paged(int page)
        {
            Post[] publishedPosts = Published();

            var postsForPage = publishedPosts
                .Skip((page - 1) * PageSize)
                .Take(PageSize);

            return new PostCollection(postsForPage)
            {
                PreviousPage = page - 1,
                NextPage = page + 1,
                HasPreviousPage = page > 1,
                HasNextPage = publishedPosts.Length > page * PageSize
            };
        }
    }
}
