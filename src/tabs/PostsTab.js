import React, {Component}  from 'react'
import Grid from '@material-ui/core/Grid';

class fetchedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error : null,
            isFetching: false,
            posts: [],
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
                    <Grid contianer spacing={3}>
                    {
                        posts.slice(0,10).map(post => (
                            <Grid item xs={12} key={post.id} align="start">
                                <div>
                                    <p>{post.id}</p>
                                    <p>{post.title}</p>
                                    <p>{post.body}</p>
                                </div>
                            </Grid>
                        ))
                    }
                    </Grid>
                </div>
            );
        }    
    }


    componentDidMount() {
        this.fetchPosts();
    }

    fetchPostsFromAPI = () => {
        this.setState({...this.state, isFetching: true});
        fetch(this.props.url)
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