import React from 'react';
import Article from '../components/article/Article';
import { RouteComponentProps } from 'react-router';

interface ArtilcePageProps
  extends RouteComponentProps<{
    slug: string;
  }> {}

const ArticlePage: React.FC<ArtilcePageProps> = ({ match }) => {
  const { slug } = match.params;
  
  return <Article />;
};

export default ArticlePage;
