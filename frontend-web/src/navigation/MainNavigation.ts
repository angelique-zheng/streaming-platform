import { strings } from '../res/strings';

type MainRoutes = {
    home: undefined;
    movies: { id?: string };
    series: { id?: string };
};

type MainNavigationItem = {
    name: keyof MainRoutes;
    displayName: string;
    path: string;
};

export const MainNavigation: { [K in keyof MainRoutes]: MainNavigationItem } = {
    home: {
        name: 'home',
        displayName: strings.fr.navigation.home,
        path: '/home/'
    },
    movies: {
        name: 'movies',
        displayName: strings.fr.navigation.movies,
        path: '/movies/'
    },
    series: {
        name: 'series',
        displayName: strings.fr.navigation.series,
        path: '/series/'
    }
};
