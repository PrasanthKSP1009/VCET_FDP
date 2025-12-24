/*
async function asyncAwaitExample() {
  var promise = new Promise((asynAwait) => {
    setTimeout(() => {
      asynAwait("This is a sample example of Async/Await");
    }, 1000);
  });
  console.log(await promise);
}
asyncAwaitExample()
*/
//Kind of Instagram

var like = async () => {
  let lik = true;
  return new Promise((likingPost, unlikingPost) => {
    if (lik) {
        likingPost("Your post is liked by this user")
    } else {
        unlikingPost("Your post is unliked by this user")
    }
  });
};

var share = async () => {
  let shar = true;
  return new Promise((sharePost, unsharePost) => {
    if (shar) {
        sharePost("Your post is shared by this user")
    } else {
        unsharePost("Your post is unshared by this user")
    }
  });
};

var post = async () => {
  let create = true;
  let pos = new Promise((createPost, deletePost) => {
    if (create) {
      createPost("Post Created");
    } else {
      deletePost("Post deleted");
    }
  });
  var [posting,liking,sharing] = await Promise.all([pos,like(),share()])
  console.log(posting);
  console.log(liking);
  console.log(sharing);
};
post();
