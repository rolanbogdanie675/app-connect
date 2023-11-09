// filename: complexCode.js

/* 
This code demonstrates a complex implementation of a social media application
where users can create profiles, post updates, follow other users,
and view their timelines.
*/

class User {
  constructor(username) {
    this.username = username;
    this.followers = [];
    this.following = [];
    this.posts = [];
  }

  follow(user) {
    if (user instanceof User) {
      this.following.push(user);
      user.followers.push(this);
    } else {
      throw new Error("Cannot follow non-user object");
    }
  }

  unfollow(user) {
    if (user instanceof User) {
      this.following = this.following.filter((u) => u !== user);
      user.followers = user.followers.filter((u) => u !== this);
    } else {
      throw new Error("Cannot unfollow non-user object");
    }
  }

  createPost(content) {
    const post = new Post(content, this.username);
    this.posts.push(post);
    return post;
  }

  getTimeline() {
    const timeline = [];
    this.posts.forEach((post) => {
      timeline.push(post);
    });

    this.following.forEach((user) => {
      user.posts.forEach((post) => {
        timeline.push(post);
      });
    });

    return timeline.sort((a, b) => b.timestamp - a.timestamp);
  }
}

class Post {
  constructor(content, username) {
    this.content = content;
    this.username = username;
    this.timestamp = new Date();
    this.likes = [];
    this.comments = [];
  }

  addLike(user) {
    if (user instanceof User) {
      this.likes.push(user);
    } else {
      throw new Error("Cannot add like by non-user object");
    }
  }

  removeLike(user) {
    if (user instanceof User) {
      this.likes = this.likes.filter((u) => u !== user);
    } else {
      throw new Error("Cannot remove like by non-user object");
    }
  }

  addComment(user, comment) {
    if (user instanceof User) {
      this.comments.push({ user, comment });
    } else {
      throw new Error("Cannot add comment by non-user object");
    }
  }

  removeComment(commentIndex) {
    if (commentIndex >= 0 && commentIndex < this.comments.length) {
      this.comments.splice(commentIndex, 1);
    } else {
      throw new Error("Invalid comment index");
    }
  }
}

// Create users
const user1 = new User("John");
const user2 = new User("Emily");
const user3 = new User("David");

// User1 follows User2 and User3
user1.follow(user2);
user1.follow(user3);

// User2 creates a post
const post1 = user2.createPost("Hello World!");

// User1 likes the post
post1.addLike(user1);

// User3 adds a comment to the post
post1.addComment(user3, "Nice post!");

// User2 removes the comment
post1.removeComment(0);

// User2 unfollows User3
user2.unfollow(user3);

// Display User1's timeline
console.log(user1.getTimeline());