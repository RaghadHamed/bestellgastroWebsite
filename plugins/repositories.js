import createRepository from '~/api/Repository.js'

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)

  const repositories = {
    adminHeroSection: repositoryWithAxios('private/hero-section'),
    adminAboutSection: repositoryWithAxios('private/about-bestellgastro'),
    adminAboutSectionItemDescription: repositoryWithAxios(
      'private/about-bestellgastro/description'
    ),
    adminServicesSection: repositoryWithAxios('private/our-service'),
    adminServicesSectionItemDetail: repositoryWithAxios(
      'private/our-service/detail'
    ),
    adminBenefitsSection: repositoryWithAxios('private/benefit'),
    adminBenefitsSectionImage: repositoryWithAxios('private/benefit/avatar'),
    adminProductsSection: repositoryWithAxios('private/our-product'),
    adminProductsSectionBenefit: repositoryWithAxios(
      'private/our-product/benefit'
    ),
    adminProductsSectionHow: repositoryWithAxios(
      'private/our-product/how-it-work'
    ),
    adminHowItWorksSection: repositoryWithAxios('private/how-it-work'),
    adminProductsFeatureSection: repositoryWithAxios('private/product-feature'),
    adminPartners: repositoryWithAxios('private/partner'),
    adminSocial: repositoryWithAxios('private/social'),
    adminSocialAttachment: repositoryWithAxios('private/social/attachment'),
    adminBlog: repositoryWithAxios('private/news'),
    adminBlogAttachment: repositoryWithAxios('private/news/attachment'),
    adminNewsLetter: repositoryWithAxios('private/subscribers-emails'),
    adminMerchants: repositoryWithAxios('private/merchant'),
    adminAgents: repositoryWithAxios('private/agent'),
    adminEmployees: repositoryWithAxios('private/employee'),
    adminCareers: repositoryWithAxios('private/position'),
    adminCareerResponsibility: repositoryWithAxios(
      'private/position/responsibility'
    ),
    adminConstants: repositoryWithAxios('private/constant'),
    adminSocialMedia: repositoryWithAxios('private/social-media'),
    adminMerchantContract: repositoryWithAxios(
      'private/contact-us/merchant/contract'
    ),
    adminContactUs: repositoryWithAxios('private/contact-us'),
    adminUsers: repositoryWithAxios('private/user'),
    adminRoles: repositoryWithAxios('private/user/role'),
    adminResetPassword: repositoryWithAxios('public/auth'),
    joinAsMerchant: repositoryWithAxios('public/merchant'),
    joinAsAgent: repositoryWithAxios('public/agent'),
    getPartners: repositoryWithAxios('public/partner'),
    getInTouch: repositoryWithAxios('public/contact-us'),
    careers: repositoryWithAxios('public/position'),
    employee: repositoryWithAxios('public/employee'),
    newsLetter: repositoryWithAxios('public/subscribers-emails'),
  }

  inject('repositories', repositories)
}
