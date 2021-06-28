import React, {Component}  from 'react'

const fetchPostsUrl = 'https://jsonplaceholder.typicode.com/posts';

class fetchedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error : null,
            isFetching: false,
            posts: []
        };
    }


    render() {
        const {error, isFetching, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (isFetching) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol>
                    {
                        posts.slice(0,10).map(post => (
                            <li key={post.id} align="start">
                                <div>
                                    <p>{post.title}</p>
                                    <p>{post.body}</p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }    
    }


    componentDidMount() {
        this.fetchPosts();
    }

    fetchPostsFromAPI = () => {
        this.setState({...this.state, isFetching: true});
        fetch(fetchPostsUrl)
            .then(response => response.json())
            .then(result => {
                this.setState({posts: result, isFetching: false})
            console.log(result)
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state, isFetching: false});
            });
    };

    fetchPosts = this.fetchPostsFromAPI

}

export default fetchedPosts