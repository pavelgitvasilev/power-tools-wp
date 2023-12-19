// libraries
import React from 'react';
// components
import { Promo } from 'components/layouts/Promo';

export const renderBlock = (item, isFrontPage) => {
    switch (item.fieldGroupName) {
        case 'Page_Layouts_Layouts_Promo':
            return <Promo data={item} isFrontPage={isFrontPage} />;
        default:
            return null;
    }
};
