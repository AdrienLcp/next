export const getPrismaError = (error: unknown, key?: string): string => {
  // if (error instanceof Prisma.PrismaClientKnownRequestError) {
  //   switch (error.code) {
  //     case 'P2002':
  //       return `This ${error.meta.target[0]} already exists`
  //   }
  // }

  return 'An error occurred'
}

// Il faut que j'ai à la fois quelle erreur c'est, et quel champs ça concerne
// pour le username déjà pris par exemple =>
//   l'erreur est "déjà pris"
//   le champs est "username"
// Et bien sûr il faut traduire le tout
