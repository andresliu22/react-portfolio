import axios from 'axios';

const url = 'https://api.github.com/users/andresliu22/repos?type=public&sort=created';

const getRepos = async () => axios.get(url);

export default { getRepos };