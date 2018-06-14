import * as React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header/header';
import './index.scss'

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          // title={data.site.siteMetadata.title}
          title = "My Gatsby TS snippet"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header 
          // siteTitle={data.site.siteMetadata.title}
          siteTitle="My Gatsby TS snippet"
        />
        <div>
          {this.props.children()}
        </div>
      </div>
    )
  }
}

// export default Layout
export default DefaultLayout

export let query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
