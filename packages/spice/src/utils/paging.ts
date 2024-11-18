type PagingItem<T extends string = "..."> = number | T;

const getRange = <T extends string>(
   start: number,
   end: number
): PagingItem<T>[] => {
   if (end < start)
      throw Error(
         `End number must be higher then start number: start ${start}, end ${start}`
      );

   const rangeLength = end - start + 1;
   return Array(rangeLength)
      .fill(0)
      .map((_, i) => i + start);
};

const clamp = (value: number, lower: number, upper: number) =>
   Math.min(Math.max(value, lower), upper);

export const getPageRange = (totalCount: number, perPage: number) => {
   return getRange(1, Math.ceil(totalCount / perPage));
};

export const getPaginationRange = <T extends string>(
   currentPage: number,
   totalCount: number,
   perPage: number,
   size: number = 5,
   ellipsis: T = "..." as T
): PagingItem<T>[] => {
   totalCount = Math.ceil(totalCount / perPage);

   if (totalCount < 1) {
      console.warn("Page count has negative value. Returning empty array.");
      return [];
   }

   if (currentPage < 1) {
      console.warn(
         "Current page has negative value. Current page will be set to 1"
      );
      currentPage = 1;
   }

   if (currentPage > totalCount) {
      console.warn(
         "Current page is higher than page count. Current page will be set to page count:",
         totalCount
      );
      currentPage = totalCount;
   }

   if (size % 2 === 0) {
      console.warn("The size must be odd. The size will be increased by 1");
      size += 1;
   }

   if (size < 5) {
      console.warn("The minimum size is 5. The size will be increased to 5");
      size = 5;
   }

   const offset = (size - 1) / 2;
   const shouldAddEllipsis = totalCount > size;

   const rangeConfig = {
      start: clamp(
         currentPage - offset,
         1,
         shouldAddEllipsis ? totalCount - size + 1 : 1
      ),
      end: clamp(currentPage + offset, size, totalCount),
   };

   const pages = getRange<T>(rangeConfig.start, rangeConfig.end);

   if (shouldAddEllipsis && pages[0] !== 1) {
      pages[0] = 1;
      pages[1] = ellipsis;
   }
   if (shouldAddEllipsis && pages[pages.length - 1] !== totalCount) {
      pages[pages.length - 1] = totalCount;
      pages[pages.length - 2] = ellipsis;
   }
   return pages;
};
