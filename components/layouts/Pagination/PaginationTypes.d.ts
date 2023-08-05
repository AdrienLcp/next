export interface IPaginationProps {
  /**
   * Total count of contents
   */
  totalContentsCount: number

  /**
   * Contents count to display in a single page
   * 
   * @default 10
   */
  maxContentsCountPerPage?: number

  /**
   * Current selected page
   * 
   * @default 1
   */
  currentPage?: number

  /**
   * Change page function
   */
  onPageChange: (newPage: number) => void
}
