const getGithubProfile = (username) => {

    return fetch(`https://api.github.com/users/${username}`)
    .then( response => response.json())
    .then( data => ({
        name: data.name,
        location: data.location
    }))
    .catch(e => console.warn(e));
}

const getProfile = (username) => {
	return fetch(`https://api.github.com/users/${username}`)
		.then((response) => response.json())
		.then(({ data }) => ({
			name: data.name,
			location: data.location,
			company: data.company,
			blog: data.blog.includes("https") ? data.blog : null,
		}))
		.catch((e) => console.warn(e));
};


const user = getProfile('basharovi');

console.log(user);