const Users = require('../../schema/user.schema');

/**
 * fetches all the documents(data) from users collection
 */
const userController = {
  getAllUsers: async (req, res) => {
    let result = await Users.find({});

    res.send(result);
    // Users.find({}, function (err, users) {
    //   if (!err) {
    //     res.send(users);
    //   } else {
    //     res.send(err);
    //   }
    // });
  },
};

module.exports = userController;
