import { useMemo } from "react";

export default function useSorPosts(pos, sort) {
    function sortedPosts() {
        if (sort) {
          return [...pos].sort((a, b) => a[sort].localeCompare(b[sort]));
        };
        return pos;
      };
      const sorted = useMemo(() => {return sortedPosts()}, [sort, pos]);
      return sorted;
}
export function usePosts(pos, sort, query) {
    const sorted = useSorPosts(pos, sort)
    const search = useMemo(() => {return sorted.filter((pos) => {return pos.title.includes(query)})}, [query, sorted]);
    return search;
};