import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function BlogList() {
  // const result = useStaticQuery(graphql`
  //   query {
  //     allMdx {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             slug
  //             title
  //             author
  //             date
  //             abstract
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // return (
  //   <div className="postsWrapper">
  //     <ul>
  //       {result.allMdx.edges.map((item, i) => (
  //         <li key={i}>
  //           <Link to={item.node.frontmatter.slug}>
  //             {item.node.frontmatter.title}
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // )
  return(<h1>yo</h1>)
}
