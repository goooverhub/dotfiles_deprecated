# Fresh Setup
* `git init --bare $HOME/.dotfiles`
* `alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'`
* `dotfiles config --local status.showUntrackedFiles no`
* `echo "alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'" >> $HOME/.bashrc`
# Migrate to New Workspace
* `alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'`
* `echo ".dotfiles" >> .gitignore`
* `git clnoe --bare https://github.com/shilinsias/dotfiles.git $HOME/.dotfiles`
* `alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'`
* `dotfiles checkout`

