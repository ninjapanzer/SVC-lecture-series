## Agile with Github

#### How is this good for students now?
#### How will it benifit them in finding a job

1. ### Agile
    - #### Being Agile
        
        - **Agile**
            > Is often idenfied as the process of defining requirements and solutions through colaboration between self-organizing, cross-functional teams. - ([wikipedia][1]) More commonly **Scrum** is the defacto agile implementation for software development - ([mountaingoat][3])
        
        - **Cross-Functional**
        
            > in regards to teams that contain varied expertise working towards the same goal. - ([wikipedia][4]) In the software development world expertises could include:
        
            > - UX
            > - Design
            > - Deployment
            > - Front-end
            > - Back-end
            > - Project Management
        
            > While all these team members may not be present for the duration of the project. They will define their own required time on the team acting in a **Self-Organizing** manner. Along with good communication about project goals team weekenesses can be addressed quickly.
        
        - **Self-Organizing**
            > is the process by which individuals focus to solve a problem as a team that defines itself. - ([selforg.pdf][2]) The reality of this is that management will assign resources(humans) based upon the expected difficulty of the development task and its required release date and this team will grow and shrink on its own based upon need. 
        
        - **The _Twitter_ example**
            > Providing no real proof that twitter is agile let us assume that _Twitter_ employs an agile process. And has a defined goal of providing a feature to reduce the number of out of focus "Selfie's" are posted on their network by
        >>FINISH ME 
        
    - #### Sprint planning
        > In my case this is how TTM does sprint planning.
        
        - **Unit of Work**
            > The easiest way to identify what a **spring** is would be to consider it a fixed unit or work or time. Our sprints last 2 weeks starting on Tuesday. They consist of a series of base tasks that to the best of your abilities should be able to be completed within the 2 week timeframe. Of course because of the nature of Scrum and agile teams this can be an imprecise science.
            
            > Since there is always work to do when you are on a sprint and you finish early resources are not wasted because there are always 3 ways to find new work.
            
            > - Backlog
            > - Swarm
            > - Continuious improvement
            
        - **Backlog**
            > Probabably the most critical thing about agile planning is a well cultivated backlog.
            
            - **Example**
                > Consider that a new feature for you application is live chat. It looks like it will take 2 sprints to complete this feature for 1 person. In the middle of your first sprint there is a critical application failure do to a change intruduced by an integrated external service that handles you users data. While the nature of this failure isn't essential for this example the part you should take away is the implied priority of a service failure.
             
                > _Unfortunatly new features often take the back seat to stability concerns. Without a stable environment that customers are willing to pay for there is noreason to create new features though._

                > As a result you are taken off your tasks for the sprint and applied to solving the problem with the external provider. This takes a little under a sprint to wrap up putting you in the middle of your next sprint. _So the question is how should the feature that was bumped be handled._
                
                > When you were reassigned from chat development it was placed on the new feature or **Roadmap** backlog and prioritized. While you were still resolving the external provider you passed over a sprint and that Chat feature was assigned to another developer who may not have had the same expertise as you do in real-time chat. (Why you were assigned in the first place). The other developer has made excellent progress but due to a lack of expertise is behind schedule. So it is decided that you will **Swarm** the problem. You do not have any work assigned yet for the last week of your sprint so you grab another developer who is finished with her sprint and the three of you approach the chat problem through a mixture of sending tasks to each other and **Pair-Programming** with all this extra help the chat feature is released a little ahead of time and you have 2 day left in your sprint. Once again we go back to the **backlog** and grab a small big of work like a 
        
        - **Swarm**
            > A short burst of development using additional resources to get a task back on track or released ahead of schedule

        - **Continuous Improvement**
            > While this is an idealogy that is not exclusive to **Agile** or **Scrum** it is a advertised as a core "feature" of **Scrum**. The idea is that as you work through problems you will interact with legacy systems and codebases. It should be at the developers perogative to define if a useful refactor should be done while working through the assigned task. This kind of distributed decision making is another facet of the **Self-Organizing** nature of agile teams.

            > How can we come to this decision?
                > - Is the task time critical - ASAP?
                > - What is the expected impact of the refactor? (How much churn will it introduce)
                > - Can I fit the refactor into this sprint?

            > Depending on the questions above you may decide that its not time for the refactor yet as it will not fit the priority and expected release of the task. This does not mean that the refactor will never be completed. You will create a new task with the help of your PM who will mix it back into the backlog and it will be assigned back to your or another developer soon.
            
        - **Demos**
            > This works hand in hand with a concept called **Continuous Integration**(Huge Out of Scope until Github) Every sprint you should be able to demo you work so that **stakeholders** can see work progress if there is anything to see(sometimes there isn't). There are two reasons for **Sprint Demos**

                > - Keep developers on track by giving them the opportunity to show off their work and recive some personal accolades
                > - Reduce inter-departmental communications barriers that are common due to differences in knowledge bases. (Accounting thinks it can't talk to marketing and engineering about work because they work on different things). This initate the last stage of the Agile process. The **feedback loop**. Which crowd sources acceptance of requirements and makes sure they align with expectations before work has been totally completed.
        
    - #### Defining a roadmap
        > Consider the largest features that your software will have and then try to assign them sprint sizes and priority. A **Roadmap** should only describe the next iteration of your software. In some cases this is an MVP or a budget cycle.

    - #### Alerting change
        > It is not uncommon for roadmaps to require change and this change comes from engineers reporting problems and sometimes the realization that the plan being executed was not decomposed well enough.

1. ### Communication
    > In the office we see each other every day but many projects can benifit from acting like **Open Source Projects** which operate under the assumption that work will be completed asyncrynously of centeral management. There are plently of **OSS** strategies and the one that I think is most appliable to new comers is the [Github][5] process.
    - #### Standup
        > Transparancy is the best way to avoid time sinks in a project. So when you have a meeting about a project it should being with a standup. These are rather informal and cover what you did yesterday and what you are working on today in very plain language. Making it a point to verbalize an issues that could slow or halt developemnt. These are called **Blockers** and often could lead to significant loss of deveopment time. Generally every day should start off with a **standup**. This should changed depending on the rate of work and fluidity of the team.

        > Technology can play a major part in improving the frequency which teams can meet. For example free services like Google Hangouts can allow up to 10 people to talk simultaniously.

        > It is always best if teams can cross talk during a **standup** but if the size of your team would make that difficult teams can form in any order or size that is appropriate.

        > Ultimately the goal of the **standup** is to be quick and verbose about status and problems.

    - #### Email
    - #### Chat
        > Persistant chat can be a huge success for a development team.
            > - [Hipchat][6]
            > - [Slack][7]
            > - [IRC][8]
        > The most important factor is that the chat log should persist users and consist of team or topic group chats

1. ### Github
    - #### Git
    - #### Commits History
    - #### Branches
1. ### Version Control 
    - #### Concurrent Teams
    - #### Change Control
    - #### Peer Review
    
    
[1]: http://en.wikipedia.org/wiki/Agile_software_development
[2]: http://www.controlchaos.com/storage/scrum-articles/selforg.pdf
[3]: http://www.mountaingoatsoftware.com/agile/scrum
[4]: http://en.wikipedia.org/wiki/Cross-functional_team
[5]: http://github.com