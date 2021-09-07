import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

type SeoProps = {
    title?: string;
    description?: string;
    lang?: string;
    keywords?: string[];
    meta?: any;
    imageSource?: string;
    imageAlt?: string;
}

export const Seo = ({
  description,
  lang,
  meta,
  keywords,
  title,
  imageSource,
  imageAlt
}: Partial<SeoProps>) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
            imageSource
          }
        }
      }
    `
  )

  keywords = keywords || site.siteMetadata.keywords.split(', ')
  title = title || site.siteMetadata.title
  lang = lang || 'en'
  meta = meta || []
  imageSource = imageSource || site.siteMetadata.imageSource

  const metaDescription = description || site.siteMetadata.description

  const image = imageSource
    ? `${site.siteMetadata.siteUrl}${imageSource}`
    : null

  const imageAltText = imageAlt || metaDescription
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          imageSource
            ? [
              {
                name: `og:image`,
                content: image,
              },
              {
                name: `og:image:alt`,
                content: imageAltText,
              },
              {
                name: `twitter:image`,
                content: image,
              },
              {
                name: `twitter:image:alt`,
                content: imageAltText,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
            ]
            : [
              {
                name: `twitter:card`,
                content: `summary`,
              },
            ]

        ).concat(
          keywords.length > 0
            ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
            : []
        )
        .concat(meta)}
    />
  )
}
