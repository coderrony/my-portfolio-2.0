'use client';
import { ThemeNameType, useThemeStore } from '@/store';
import { getColors } from '@/utils/colors';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { buttonVariants } from '../ui/button';
import { Icons } from './FlotingNav';
import { cn } from '@/lib/utils';

function ThemeProvider() {
  const { setTheme } = useThemeStore();
  const themeColors = getColors();
  return (
    <Dialog>
      <DialogTrigger asChild>
     

        <span
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-12 rounded-full hover:bg-primary hover:text-primary-foreground',
          )}
        >
          <Icons.theme className='size-4  ' />
        </span>
      </DialogTrigger>

      <DialogContent className='max-w-xs rounded-xl shadow-lg bg-gradient-to-br from-primary to-secondary'>
        <DialogHeader>
          <DialogTitle className='text-lg text-primary-foreground font-bold text-center mb-2'>
            Choose Theme Color
          </DialogTitle>
          <DialogDescription className='text-center mb-4'>
            <span className='text-muted-foreground'>
              Personalize your experience
            </span>
          </DialogDescription>
          <div className='flex justify-center gap-5 mt-2'>
            {(themeColors as ThemeNameType[]).map(color => (
              <Tooltip key={color}>
                <TooltipTrigger
                  className={` w-10 h-10 rounded-full border-4 border-white shadow-md hover:scale-110 transition-transform cursor-pointer`}
                  style={{
                    background: `linear-gradient(135deg, ${color}, #fff70033)`,
                  }}
                  aria-label={`Set theme color to ${color}`}
                  onClick={() => setTheme(color)}
                >
                  <span className='sr-only'>{color}</span>
                </TooltipTrigger>
                <TooltipContent>{color}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ThemeProvider;
