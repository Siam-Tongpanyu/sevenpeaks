import React from 'react';
import {Layout} from '../Layouts';
import GuardianDetail from '../Components/Guardian/GuardianDetail';
import Goback from '../Components/Goback';


const Article = props => {
  let aDetailId = props.match.params.articleId || "";
  return (
    <Layout>
      <Goback />
      <GuardianDetail aDetailId={aDetailId} />
      <Goback />
    </Layout>
  );
};

export default Article;