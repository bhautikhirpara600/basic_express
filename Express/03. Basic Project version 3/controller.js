//http://localhost:3000/user/Vijay
export const userNameController = (req, res) => {
    const userName = req.params.userName;
    res.send(`Welcome ${userName}`)
}

//http://localhost:3000/search?keyword=kashmir
export const searchController = (req, res) => {
    const keyword = req.query.keyword;
    res.send(`Search for ${keyword}`)
}