function mock(name) {
	
    var resolvedPath = process.cwd();
    console.log(resolvedPath);
    try {
        var mockConfig = require(resolvedPath + '/mock.json');
    } catch (e) {
        return {
            'msg': 'no mock.json file!'
        }
    }
    return mockConfig[name] || [];
}

module.exports = mock;
