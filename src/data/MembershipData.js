// const content = "Go to to login and sign up. ";
// const link = "https://gdsc.community.dev/sti-college-cagayan-de-oro/"

// const linkedContent = content.replace("Google Developer Student Clubs STI College Cagayan de Oro", `<a href="${link}" target="_blank">Google Developer Student Clubs STI College Cagayan de Oro</a>`);

const MembershipCardData = [
    {
        id: "headingOne",
        accordionParent: "accordion--Membership",
        title: "Step #1",
        target: "collapseOne",
        ariaControls: "collapseOne",
        link: "https://gdsc.community.dev/sti-college-cagayan-de-oro/",
        linkName: "Google Developer Student Clubs STI College Cagayan de Oro",
        content: "First Login and Sign up to ",
        img: "gdev-sign.png",
        imgWidth: 1200,
        imgHeight: 600,
        imgAlt: "sign-up or login"
    },

    {
        id: "headingTwo",
        accordionParent: "accordion--Membership",
        title: "Step #2",
        target: "collapseTwo",
        ariaControls: "collapseTwo",
        linkName: "Join",
        link: "https://gdsc.community.dev/sti-college-cagayan-de-oro/",
        content: "You will be redirect again to STI CDO Chapter and just click ",
        img: "sti-dsc.png",
        imgWidth: 1200,
        imgHeight: 600,
        imgAlt: "sti dsc"
    },

    {
        id: "headingThree",
        accordionParent: "accordion--Membership",
        title: "Step #3",
        target: "collapseThree",
        ariaControls: "collapseThree",
        // linkName: "Join",
        link: "https://gdsc.community.dev/sti-college-cagayan-de-oro/",
        content: "Success! you're officially part now of the GDSC STI CDO",
        img: "sti-success.png",
        imgWidth: 1200,
        imgHeight: 600,
        imgAlt: "sti success"
    },
]

const BadgeCardData = [
    {
        id: "headingBadgeOne",
        accordionParent: "accordion--Badge",
        title: "Step #1",
        target: "collapseBadgeOne",
        ariaControls: "collapseBadgeOne",
        linkName: "Google Developers Profile",
        link: "https://bit.ly/members-badge.",
        content: "To Redeem the membership badge click create profile by visiting ",
        img: "create-profile.png",
        imgWidth: 1200,
        imgHeight: 400,
        imgAlt: "gdsc create profile"
    },

    {
        id: "headingBadgeTwo",
        accordionParent: "accordion--Badge",
        title: "Step #2",
        target: "collapseBadgeTwo",
        ariaControls: "collapseBadgeTwo",
        // linkName: "Google Developers Profile",
        // link: "https://gdsc.community.dev/sti-college-cagayan-de-oro/",
        content: "Success! you earn the Google Developer Student Clubs Member Badge!",
        img: "badge-redeem.png",
        imgWidth: 1200,
        imgHeight: 600,
        imgAlt: "redeem badge"
    },

    {
        id: "headingBadgeThree",
        accordionParent: "accordion--Badge",
        title: "Step #3",
        target: "collapseBadgeThree",
        ariaControls: "collapseBadgeThree",
        linkName: "Google Developers Profile",
        link: "https://developers.google.com/profile/",
        content: "To view your Google Developer Student Club Member's Badge, go to ",
        img: "gdev-profile.png",
        imgWidth: 1100,
        imgHeight: 500,
        imgAlt: "gdsc badge"
    }
]

export { MembershipCardData, BadgeCardData };
