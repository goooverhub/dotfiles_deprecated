set nocompatible              " be iMproved, required
filetype off                  " required
" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'pangloss/vim-javascript'
Plugin 'Valloric/YouCompleteMe'
Plugin 'kien/ctrlp.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'vim-syntastic/syntastic'
Plugin 'tpope/vim-fugitive'
Plugin 'jelera/vim-javascript-syntax'
Plugin 'scrooloose/nerdcommenter'
Plugin 'Xuyuanp/nerdtree-git-plugin'
Plugin 'vim-airline/vim-airline'
call vundle#end()            " required
filetype plugin indent on    " required
syntax on:
set relativenumber
set number 
set autoindent
execute pathogen#infect()
syntax on
" "filetype plugin indent on
set runtimepath^=~/.vim/bundle/ctrlp.vim
set tabstop=2
set shiftwidth=2
set softtabstop=2
set expandtab
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
set backspace=indent,eol,start
