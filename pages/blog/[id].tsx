import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from "next/router";
import { print } from 'graphql/language/printer';
import { request } from 'graphql-request'
import { NextSeo } from 'next-seo';
import { Row, Col, Button, Tag, Avatar} from 'antd';
import styled from 'styled-components';
import ARTICLES_QUERY from "../../apollo/queries/article/articles";
import ARTICLE_QUERY from "../../apollo/queries/article/article";
import { Markdown } from 'react-showdown';
import ArticleAuthor from '../../components/data-display/ArticleAuthor';
import Layout from '../../components/global/Layout'
import Footer from '../../components/navigation/Footer';
import HeroArticle from '../../components/section/HeroArticle';

const Article = ({ article, navigation }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={article.title}
        description={article.description}
        canonical={`https://jonathannabais.fr/blog/${article.slug}`}
        openGraph={{
          title: article.title,
          description: article.description,
          url: `https://jonathannabais.fr/blog/${article.slug}`,
          type: 'article',
          article: {
            publishedTime: article.published_at,
            modifiedTime: '2018-01-21T18:04:43Z',
            expirationTime: '2022-12-21T22:04:11Z',
            authors: [
              `https://jonathannabais.fr/authors/jonathan-nabais`,
            ],
            tags: [article.category.name]
          },
          images: [
            {
              url: `https://res.cloudinary.com/angulaire/image/upload/c_scale,h_630,w_1200/`,
              alt: article.title,
              width: 1200,
              height: 630,
            }
          ]
        }}
      />
      <HeroArticle
        navbar={navigation.navbar}
        article={article}
        color="transparent"
        space="default"
        backgroundImageUrl="https://res.cloudinary.com/angulaire/image/upload/v1586182535/suhg8eda7lfcztwpy71x.png"
        shapes={[
          {
            image: {
              url: "https://res.cloudinary.com/angulaire/image/upload/v1584704992/ejubj9tphjkd1tah0zvl.svg"
            },
            position: {
              bottom: ["0", "20px"],
              right: ["-60px", "-80px"]
            },
            size: {
              height: ["92px", "196px"],
              width: ["262px", "562px"]
            }
          }
        ]}
      />
      <Layout
        color="secondary"
        space="marginLeft"
      >
        <Row justify="center" align="top">
          <Col xs={24} md={20}>
          </Col>
        </Row>
      </Layout>
      <Footer 
        navigation={navigation.footer}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const endpoint = `${process.env.API_BASE_URL}/graphql`
  const query = print(ARTICLES_QUERY)
  // Call an external API endpoint to get articles
  const data = await request(endpoint, query)
  const articles = await data.articles

  // Get the paths we want to pre-render based on articles
  const paths = articles.map(article => `/blog/${article.slug}`)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const endpoint = `${process.env.API_BASE_URL}/graphql`
  const query = print(ARTICLE_QUERY)
  const variables = {
    slug: params.id,
  }
  const data = await request(endpoint, query, variables)
  const article = await data.articles[0]
  const navigation = await data.navigation

  // Pass post data to the page via props
  return { props: { article, navigation }}
}

export default Article; 