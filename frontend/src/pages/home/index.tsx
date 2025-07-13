import { useEffect } from "react";
import confetti from "canvas-confetti";

import { Typography } from "../../utils/themes/Typography";

/**
 * @file index.tsx
 * @module HomeScreen
 * @description
 * Tela inicial pós-login. Exibe uma mensagem de boas-vindas personalizada ao usuário autenticado,
 * utilizando animação de confete para reforçar a experiência positiva.
 *
 * - Recupera o nome do usuário do localStorage.
 * - Utiliza o pacote canvas-confetti para animação visual.
 * - Exibe mensagem de sucesso com estilização personalizada.
 *
 * @see https://www.npmjs.com/package/canvas-confetti
 * @see src/utils/themes/Typography.tsx
 */

export function HomeScreen() {

  const userName = localStorage.getItem("userName")
  useEffect(() => {
    confetti({
      particleCount: 300,
      angle: 0,
      spread: 100,
      origin: { x: -0.1, y: 0.4 }
    });
    confetti({
      particleCount: 300,
      angle: 180,
      spread: 100,
      origin: { x: 1.1, y: 0.4 }
    });
  }, []);
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen">
      <Typography variant="H1" className="text-white text-center ">
        PARABÉNS, {userName?.toUpperCase()}! <br />
        VOCÊ ESTÁ LOGADO! <br />
        🎉🎉
      </Typography>
    </div>
  );
}