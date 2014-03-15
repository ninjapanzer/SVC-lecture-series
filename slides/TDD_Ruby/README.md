TDD

### Determinism
  The concept of non-deterministic programming is one that I think creates a slippery slope for aguments for or against TDD

  Even when you do not have direct control of the _Choice_ making process of your code you often do determine the way that choices will be made. Thus you can set expectaitons on those patterns.

### Ruby
  > Getting setup
  > [Brew][1]
  > [RubyInstaller][2]
  > [rvm][3]
  > [pik][4]

### Kata
  > [CodeKata][5]
  > Code kata's is a structure to help with build craftmans ship by forcing the student to practice common problems to find efficent answers.
  > [Ruby Warrior][6]

### Testing
### Overhead
### SDLC
- Story Decomposition
- Objective QA
### Conway's Game of Life
  http://www.rubyinside.com/screencast-coding-conways-game-of-life-in-ruby-the-tdd-way-with-rspec-5564.html
  Try googleing conways game of life. Its fun


### What to test for
- Boundary Values - The theory is that problems arise more on the edges between conditions than in the middle of the condition [Laboon2][7] Other boundaries `nil` `> maxint` `< minint` `buffer underrun`
- Base case [Laboon2][7] - An element that is an expected use case or not around a boundary
- Edge case [Laboon2][7] - An element near a boundary or an unexpected use case
- Corner (Pathological) Case [Laboon2][7] - Cases that occur outside of normal operating parameters "edge case"
- - For a positive integer Corners might be -1, 3+71, 9.3, "foo"
- Success Case [Laboon2][7] - Tests that asserts software will return `correct` value
- Failure Case [Laboon2][7] - Tests that should asset an exception is raised or default value returned

[1]: http://brew.sh/
[2]: http://rubyinstaller.org/
[3]: http://rvm.io/
[4]: http://rubyinstaller.org/add-ons/pik/
[5]: http://codekata.com/
[6]: https://www.bloc.io/ruby-warrior/#/
[7]: https://github.com/laboon/CS1699/blob/master/pdf-lectures/cs1699-lecture2.pdf