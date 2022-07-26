const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

const sellers = ['turtle', 'peter', 'titan', 'manchester', 'puma', 'inkfruit',
'fabindia', 'jealous', 'skagen', 'fossil', 'fila', 'murcia', 'ben',
'reid', 'police', 'gini', 'bwitch', 'baggit', 'casio', 'adidas',
'timberland', 'david', 'buckaroo', 'pitaraa', 'colorbar', 'john',
'disney', 'gas', 'carlton', 'diva', 'rocky', 'kiara', 'catwalk',
'maxima', 'w', 'scullers', 'nike', 'levis', 'clarks', 'vishudh',
'playboy', 'arrow', 'carrera', 'wrangler', 'fnf', 'french', 'vans',
'do', 'id', 'peperone', 'indigo', 'rocia', 'mineral', 'crocs',
'image', 'lotto', 'united', 'reebok', 'lucera', 'streetwear',
'tonga', 'femella', 'just', 'ganuchi', 'sdl', 'dkny', 'urban',
'fastrack', 'classic', 'u.s.', 'jockey', 'ipanema', 'sushilas',
'doodle', 'ray-ban', 'giorgio', 'aneri', 'spice', 'estd.',
'coolers', 'chromozome', 'portia', 'spykar', 'myntra', 'revv',
'lovable', 'numero', 'q&q', 'rockport', 'skechers', 'locomotive',
'louis', 'mark', 'lino', 'lee', 'only', 'colour', 's.oliver',
'red', 'probase', 'ucb', 'little', 'mother', 'estelle', 'aurelia',
'gliders', 'enamor', 'f', 'revlon', 'tantra', 'tokyo', 'pal',
'elle', 'fusion', 'inc', 'forever', 'basics', 'yelloe', 'palm',
'hanes', 'formula', 'kalenji', 'flying', 'lakme', 'lotus', 'sepia',
'indian', 'enroute', 'lencia', 'esprit', 'wildcraft', 'j.del',
'van', 'rasasi', 'proline', '109f', 'calzini', 'bulgari', 'helix',
'morellato', 'franco', 'bulchee', 'denizen', 'jag', 'allen',
'facit', 'park', 'nabaiji', 'music', 'superman', 'ed', 'spalding',
'alayna', 'biba', '4711', 'amante', "mod'acc", 'converse', 'royal',
'aspen', 'cavallini', 'peri', 'marvel', 'wills', 'timex', 'being',
'dc', 'mr.men', 'decathlon', 'campbell', 'bata', 'inc.5', 'fifa',
'global', 'vogue', 'j.', 'mumbai', 'taylor', 'filac', 'otls',
'jack', 'dunhill', "levi's", 'quiksilver', 'american', 'spinz',
'footfun', 'deni', 'csk', 'force', 'satya', 'olay', 'nautica',
'giny', 'mr.', 'rreverie', 'genesis', 'secret', 'adrika', 'jovan',
'tommy', 'status', 'highlander', 'be', 'quechua', 'polaroid',
'warner', 'biara', 'hm', 'alma', 'shree', 'angry', 'kraus',
'asics', "pond's", 'chhota', 'madagascar3', 'provogue', 'yves',
'globalite', 'mod-acc', 'tortoise', 'hakashi', 'roxy', 'speedo',
'latin', 'hidekraft', 'black', 'deborah', 'cabarelli', '18+',
'prafful', 'happy', 'avirate', 'm', 'tous', 'provouge', 'burberry',
'miami', 'citizen', 'boss', 'inc.', 'dusg', 'parx', 'paridhan',
'gatsby', 'senorita', 'crusoe', 'folklore', 'u.s.polo', 'woodland',
'newhide', 'tonino', 'celine', 'nyk', 'wild', 'inesis', 'idee',
'envirosax', 'brut', 'vital', 'valley', 'new', 'swiss',
'reid&taylor', 'hugo', 'barbie', 'inaya', 'guess', '2go', 'free',
'batman', 'kids', 'smugglerz', 'garfield', 'remanika', 'levisi',
'cobblerz', 'kama', 'ralph', 'aerosmith', 'che', 'rcb',
'fogg', 'hop', 'skypar', 'ivory', 'ponds', 'paris', 'regent',
'la-emotio', 'kochi', 'madagascar', 'f5', 'baldessarini',
'redtape', 'footloose', '24',
'ayaanay_women_new_2013_tunics_size_chart.jpg', 'newfeel',
'giordano', 'chimp', 'vero', 'opium', 'guerrilla', 'mickey',
'span', 'fortune', 'ant', 'fcuk', 'stoln', 'belmonte', 'toniq',
'jimi', 'horsefly', 'spinn', 'btwin', 'ayaany', 'tiptopp',
'domyos', 'jungle', 'fiorelli', 'calvin', 'visudh', 'skybags',
'avengers', 'hidedge', 'york', 'mayhem', 'nirvana', 'versace',
'rolling', 'timen', 'smartoe', 'belkin', 'pepe', 'lomani', 'delhi',
'grendha', 'miss', 'homme', 'estee', 'c', 'biotique', 'hannah',
'cartier', 'paco', 'cat', 'undercolors', 'nautilus', 'oakley',
'mtv', 'slazenger', 'i', 'raymond', 'sher', 'valentino', 'jacques',
'pieces', 'perry', 'levitate', 'artengo', 'carolina', 'miss-t',
'the', 'windsor', 'davidoff', 'rtv_loadtest', 'billy', 'pink',
'rayban', 'dark', 'ray', 'ayaanay', 'stens', 'pune', 'scholl',
'ferrari', 'euroluxe', 'ediots', 'ice', 'saint', 'kipsta', 'hush',
'suunto', 'geonaute', 'love', 'swayam', 'kylie', "levi'si",
'beatles', 'salomon', 'dolce', 'mont', 'chromozone', 'pacific',
'kelme', 'rising', 'rajasthan', 'queen', 'rnc', 'solognac',
'megadeth', 'denim', 'beyouty', 'kkr', 'kenneth', 'old',
'salvatore', 'jaguar', 'wilson', 'umbro', 'miki', 'heart', 'fruit',
'tribord', 'smashing', 'carlos', 'yardley', 'tabac', 'kxip',
'xoxo', 'productdisplayname', 'joker', 'nina', 'and', 'aramis',
'bw!tch', 'quick', 'strapless', 'avon', 'espirit', 'pierre',
'under', 'linkin', 'basice', 'la', 'rassasi', 'backpackgit',
'azzaro', 'hear', 'test', 'deniyo']

const loadSellers = catchAsync(async (req, res) => {
  sellers.forEach(async (seller) =>  {
    seller = seller.toLowerCase()
    const data = {
      'name': seller,
      'email': `${seller}@gmail.com`,
      'password': `${seller}@12345678`,
      'role': 'seller'
    }
    const user = await userService.createUser(data);
    console.log(data);
  })
  console.log('completed');
  res.send('complete')
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loadSellers
};
