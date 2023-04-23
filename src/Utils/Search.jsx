import React, {useMemo} from 'react';

export const useSearch = (list, sort) => {
    return useMemo(() => {
        if (sort) {
            return [...list].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return list;
    }, [sort, list]);
}

