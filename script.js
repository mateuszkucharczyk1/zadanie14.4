var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		src: 'https://www.harrypottermovieposters.com/wp-content/uploads/2013/08/harry-potter-and-the-order-of-the-phoenix-movie-poster-style-h.jpg'
	},
	{
		id: 2,
		title: 'Król lew',
		desc: 'film o królu sawanny',
		src: 'https://movieposters2.com/images/731769-b.jpg'
	},
	{
		id: 3,
		title: 'Matrix',
		desc: 'Film o wojnie maszyn z ludźmi',
		src: 'http://www.impawards.com/1999/posters/matrix_ver1_xlg.jpg'
	},
	{
		id: 4,
		title: 'Fog',
		desc: 'Film o tajemniczej mgle',
		src: 'http://www.impawards.com/2005/posters/fog.jpg'
	},
	{
		id: 5,
		title: 'Frozen',
		desc: 'Bajka o królowej śniegu',
		src: 'http://www.impawards.com/2013/posters/frozen.jpg'
	}
];

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function () {
		return (
			React.createElement('li', {
				key: this.props.movie.id
			},
			React.createElement(MovieTitle, {
				title: this.props.movie.title
			}),
			React.createElement(MovieDesc, {
				desc: this.props.movie.desc
			}),
			React.createElement(MovieImage, {
				image: this.props.movie.src
			})
			)
		)
	}
});

var MovieImage = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired
	},
	render: function () {
		return (
			React.createElement('img', {src: this.props.image})
		)
	}
})

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function () {
		return (
			React.createElement('h2', {}, this.props.title)
		)
	}
});

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired
	},
	render: function () {
		return (
			React.createElement('p', {}, this.props.desc)
		)
	}
});

var moviesElements = movies.map(function(movie) {
	return  React.createElement(Movie, {
		key: movie.id,
		movie: movie
	})
});

var MoviesList = React.createClass({
	render: function () {
		return (
			React.createElement('ul', {}, moviesElements)
		)
	}
});
var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
		);

ReactDOM.render(element, document.getElementById('app'));
