export const state = () => ({
    baseUrl: 'https://bestellgastro.talentxpro.de/',
    heroData: [],
    callToAction: {},
    aboutData: [],
    services: [],
    benefits: [],
    benefitsAvatar: '',
    products: [],
    howItWorksData: [],
    productsFeature: [],
    partners: [],
    getInTouchContent: {},
    socialMedia: [],
    contactUs: [],
    merchantContact: [],
    privacy: {},
    terms: {},
    socialResponsibility: [],
    blogs: [],
    singleBlog: {},
})

export const mutations = {
    SET_HERO_DATA(state, heroData) {
        state.heroData = heroData
    },

    SET_CALL_TO_ACTION(state, callToAction) {
        state.callToAction = callToAction
    },

    SET_ABOUT_DATA(state, aboutData) {
        state.aboutData = aboutData
    },

    SET_SERVICES(state, services) {
        state.services = services
    },

    SET_BENEFITS(state, benefits) {
        state.benefits = benefits
    },

    SET_BENEFITS_AVATAR(state, benefitsAvatar) {
        state.benefitsAvatar = benefitsAvatar
    },

    SET_PRODUCTS(state, products) {
        state.products = products
    },

    SET_HOW_IT_WORKS_DATA(state, howItWorksData) {
        state.howItWorksData = howItWorksData
    },

    SET_PRODUCT_FEATURES(state, productsFeature) {
        state.productsFeature = productsFeature
    },

    SET_PARTNERS(state, partners) {
        state.partners = partners
    },

    SET_GET_IN_TOUCH(state, getInTouchContent) {
        state.getInTouchContent = getInTouchContent
    },

    SET_SOCIAL_MEDIA(state, socialMedia) {
        state.socialMedia = socialMedia
    },

    SET_CONTACT_US(state, contactUs) {
        state.contactUs = contactUs
    },

    SET_MERCHANT_CONTACT(state, merchantContact) {
        state.merchantContact = merchantContact
    },

    SET_PRIVACY(state, privacy) {
        state.privacy = privacy
    },

    SET_TERMS(state, terms) {
        state.terms = terms
    },

    SET_SOCIAL_RESPONSIBILITY(state, socialResponsibility) {
        state.socialResponsibility = socialResponsibility
    },

    SET_BLOGS(state, blogs) {
        state.blogs = blogs
    },

    GET_SINGLE_BLOG(state, blogId) {
        state.singleBlog = state.blogs.find((blog) => {
            return blog.id === blogId
        })
    },
}
