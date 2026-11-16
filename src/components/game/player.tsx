import { Player as PlayerType, Card as CardType } from '@/lib/poker-engine';
import { Card } from './card';
import { Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PlayerProps {
  player: PlayerType;
  isActiveTurn: boolean;
  isDealer: boolean;
  gameStage: string;
  className?: string;
  winningCards?: CardType[];
  isWinner?: boolean;
  seatIndex?: number;
}

function SpeechBubble({ speech, seatIndex }: { speech: string; seatIndex: number }) {
  const { t } = useTranslation();

  // Left side players (P1: Dakota, P2: Parker) -> point into table felt towards the right
  const isLeftSide = seatIndex === 1 || seatIndex === 2;
  // Right side players (P6, P7) -> point into table felt towards the left
  const isRightSide = seatIndex === 6 || seatIndex === 7;

  if (isLeftSide) {
    return (
      <div className="absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 z-50 animate-in fade-in zoom-in-95 duration-200 pointer-events-none">
        <div className="relative bg-white dark:bg-zinc-800 text-black dark:text-zinc-100 text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl border border-gray-200 dark:border-zinc-700 max-w-[170px] sm:max-w-[220px] whitespace-normal text-left leading-snug">
          {t(speech)}
          {/* Arrow pointing left towards player */}
          <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white dark:bg-zinc-800 rotate-45 border-l border-b border-gray-200 dark:border-zinc-700" />
        </div>
      </div>
    );
  }

  if (isRightSide) {
    return (
      <div className="absolute right-[calc(100%+8px)] top-1/2 -translate-y-1/2 z-50 animate-in fade-in zoom-in-95 duration-200 pointer-events-none">
        <div className="relative bg-white dark:bg-zinc-800 text-black dark:text-zinc-100 text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl border border-gray-200 dark:border-zinc-700 max-w-[170px] sm:max-w-[220px] whitespace-normal text-right leading-snug">
          {t(speech)}
          {/* Arrow pointing right towards player */}
          <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white dark:bg-zinc-800 rotate-45 border-r border-t border-gray-200 dark:border-zinc-700" />
        </div>
      </div>
    );
  }

  // Top and bottom players (P0, P3, P4, P5) -> bubble above
  return (
    <div className="absolute -top-11 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200 pointer-events-none">
      <div className="relative bg-white dark:bg-zinc-800 text-black dark:text-zinc-100 text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl border border-gray-200 dark:border-zinc-700 max-w-[180px] sm:max-w-[240px] whitespace-normal text-center leading-snug">
        {t(speech)}
        {/* Arrow pointing down towards player */}
        <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white dark:bg-zinc-800 rotate-45 border-b border-r border-gray-200 dark:border-zinc-700" />
      </div>
    </div>
  );
}

export function Player({
  player,
  isActiveTurn,
  isDealer,
  gameStage,
  className = "",
  winningCards,
  isWinner,
  seatIndex,
}: PlayerProps) {
  const { t } = useTranslation();
  const showFace = player.isHuman || gameStage === 'showdown';
  const seat = seatIndex ?? player.id;
  const isFoldedOrOut = player.status === 'folded' || player.isEliminated;

  return (
    <div
      className={`
        absolute flex flex-col items-center transition-all duration-300 ${className}
        ${player.currentSpeech ? 'z-50' : ''}
      `}
    >
      {/* Speech Bubble (Always full opacity & elevated z-index) */}
      {player.currentSpeech && (
        <SpeechBubble speech={player.currentSpeech} seatIndex={seat} />
      )}

      {/* Bet Badge - In flow (pushes info box down) */}
      {player.status !== 'folded' && player.status !== 'eliminated' && player.currentBet > 0 && (
        <div className="mb-1 z-30 animate-in fade-in zoom-in-50 duration-200">
          <div className="bg-yellow-400 dark:bg-yellow-600 text-black dark:text-white px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold shadow-md border border-yellow-500 dark:border-yellow-400 flex flex-col items-center leading-tight">
            <span className="text-[8px] opacity-80 uppercase leading-none mb-0.5">{t('common.player_bet')}</span>
            ${player.currentBet}
          </div>
        </div>
      )}

      {/* Player Info Box */}
      <div
        className={`
          relative mb-1 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded border 
          text-[10px] sm:text-xs md:text-sm lg:text-base 
          text-center 
          min-w-[60px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px]
          transition-colors duration-300
          ${isWinner ? 'bg-gradient-to-r from-yellow-300 to-amber-500 border-yellow-600 text-black scale-110 z-30 shadow-[0_0_15px_rgba(234,179,8,0.5)]' : ''}
          ${isActiveTurn && !isWinner ? 'bg-black border-black text-white dark:bg-white dark:border-white dark:text-black scale-105 z-20 shadow-lg' : ''}
          ${!isActiveTurn && !isWinner ? 'bg-white/90 border-zinc-200 text-zinc-900 dark:bg-neutral-900/80 dark:border-neutral-700 dark:text-neutral-300' : ''}
          ${isFoldedOrOut ? 'opacity-40 grayscale' : ''}
        `}
      >
        <div className="font-bold truncate max-w-[60px] sm:max-w-none mx-auto text-[9px] sm:text-xs md:text-sm lg:text-base">
          {t(player.name)}
        </div>
        <div className={`font-mono leading-none md:text-lg ${isWinner ? 'text-black font-black' : (isActiveTurn ? 'text-zinc-200 dark:text-zinc-800' : 'text-zinc-600 dark:text-zinc-400')}`}>
          ${player.chips}
        </div>

        {/* Status Badge */}
        {player.status !== 'active' && (
          <div className={`text-[9px] sm:text-[10px] md:text-xs lg:text-sm uppercase font-bold mt-0.5 leading-none ${isWinner ? 'text-amber-900' : 'text-slate-400'}`}>
            {player.status === 'folded' && t('common.player_fold')}
            {player.status === 'allin' && <span className="font-black text-red-600 dark:text-red-500">{t('common.player_allin')}</span>}
            {player.status === 'eliminated' && t('common.player_out')}
          </div>
        )}

        {/* Hand Description Badge (Showdown) */}
        {player.handDescription && (
          <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 z-40 whitespace-nowrap">
            <div className={`
              px-2 py-1 rounded text-[10px] sm:text-xs font-bold shadow-lg border backdrop-blur-sm animate-in zoom-in-50 duration-300
              ${isWinner
                ? 'bg-gradient-to-r from-yellow-300 to-amber-400 text-black border-yellow-500 shadow-yellow-500/50'
                : 'bg-zinc-900 text-white dark:bg-white dark:text-black border-zinc-700 dark:border-zinc-300'
              }
            `}>
              {player.handDescription}
            </div>
          </div>
        )}

        {/* Dealer Button */}
        {isDealer && (
          <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 md:-top-3 md:-right-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-white text-black font-bold text-[8px] sm:text-[10px] md:text-xs flex items-center justify-center border border-gray-400 shadow-sm z-30">
            D
          </div>
        )}
      </div>

      {/* Cards */}
      <div className={`relative flex gap-0.5 sm:gap-1 ${isFoldedOrOut ? 'opacity-40 grayscale' : ''}`}>
        {player.hand.length > 0 ? (
          player.hand.map((card, idx) => {
            const isWinningCard = winningCards?.some(wc => wc.rank === card.rank && wc.suit === card.suit);
            return <Card key={idx} card={card} hidden={!showFace} isWinning={isWinningCard} />;
          })
        ) : (
          <div className="h-11 sm:h-14 w-0"></div>
        )}

        {/* Thinking Indicator Overlay */}
        {isActiveTurn && !isWinner && !player.isHuman && player.status === 'active' && (
          <div className="absolute inset-0 z-50 flex items-center justify-center">
            <div className="bg-black/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-lg border border-white/20 backdrop-blur-sm animate-in fade-in duration-200 whitespace-nowrap">
              <Loader2 className="w-2.5 h-2.5 animate-spin text-white" />
              <span>{t('common.thinking')}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
