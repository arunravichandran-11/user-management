const mockCountries = [
  {
    id: 1,
    name: 'India',
  },
  {
    id: 2,
    name: 'America',
  },
  {
    id: 3,
    name: 'Hongkong',
  },
];

/**
 *
 * @param {*} req
 * @param {*} res
 * returns the list of contries
 */
module.exports = (req, res) => {
  res.send(mockCountries);
};
