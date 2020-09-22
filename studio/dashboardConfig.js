export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6a093de40e4c014198aec3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-k6j8p14g',
                  apiId: '7fedf6ca-3fe5-49d0-9c50-7aa331e993e7'
                },
                {
                  buildHookId: '5f6a093d570270009eb9324c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9438r176',
                  apiId: 'f2eae700-69a6-4b72-86ee-5d0783a20605'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joeytrout/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9438r176.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
