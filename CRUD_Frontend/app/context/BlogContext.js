import createDataContext from './createDataContext';
import * as RootNavigation from '../RootNavigation';

const reducer =(state , action)=>{
	switch(action.type){
		case 'add_blog_post':
			return [...state,{
				id:Math.floor(Math.random()*99999),
				title:action.payload.title,
				text: action.payload.text
			}];
			case 'delete_blog':
				return state.filter((some)=>some.id!=action.payload);
			case 'edit_blogPost':
				return (state.map((blogPost)=>{
					return blogPost.id === action.payload.id ? action.payload : blogPost;
				}));
		default:
			return state;
	}
};

const addBlogPost=(dispatch)=>{

	return (title,text)=>{
		if(text===''||title===''){
			alert('Text Box not empty!')
		}else if(text!=''||title!=''){

		dispatch({type:'add_blog_post',payload:{title,text}});
			RootNavigation.navigate('All List');
		}
	};
};

const EditBlogPost=(dispatch)=>{
	return(id,title,text)=>{
		if(text===''||title===''){
			alert('Text Box not empty!')
		}else{
			dispatch({type:'edit_blogPost', payload:{id,title,text}});
		//RootNavigation.navigate('All List');
		}
		
	};
};



const DeteBlog=(dispatch)=>{

	return(id)=>{
		dispatch({type:'delete_blog', payload:id});
	};

};


export const {Context , Provider} = createDataContext(
	reducer,
	{addBlogPost,DeteBlog,EditBlogPost},
	[]
);
