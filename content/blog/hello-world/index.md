---
title: Can version control history data identify if a system is well architected?
date: "2015-03-29T22:12:03.284Z"
---



Software repositories contain valuable information that is not only useful to record development history but also to analyse that history. They assist in program understanding, visualization. I looked the distribution of the commits for [AlphaGov Publisher](https://github.com/alphagov/publisher) . An area showing many commits,may have a high development activity. This way we can pinpoint possible ’problem’ modules.[[1]]

According to Andrew Hunt and David Thomas, a well architectured software design has a critical concept called Orthogonality. They believe, it produces systems that are easy to design, build, test, and extend [[2]]. This is what Yourdon and Constantine called cohesion [[3]]. I examined the Publisher project with the help of a visualiser tool called Gource [[4]]. Upon inspection, I found that, this project contained very well structured module. Developers seem to follow TDD approach. I also observed, after adding a feature, the developer would subsequently test that feature by updating the unit test directory. Also, as this is an Open Source Software, We can see that the common life-cycle of an OSS iteration:

 1. Report bug.
 2. Developer is tasked or code pull request is submitted.
 3. Change is committed to the code base.

This fits tightly to the highly iterative implementation, testing, and maintenance loop [[5]]. Nevertheless, this iterative process happened later during stages of the product lifecycle as the it became stable . I have created a video which depicts the visualization of the project from the beginning [see below]. By visual analysis, we can deduce that, there exists roughly same amount of tests as there are classes. The visualisation shows addition of unit tests, functional tests, integration tests. Through observations, I believe that the Publisher project is very well architected as you can see the separation of concerns just by the visualisation.
<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Nm8RbKennWg" frameborder="0" allowfullscreen></iframe>
</p>
A well designed and stable architecture also conforms to **OCP** (Open-Closed Principle), hence, whether a system follows OCP patterns strictly enough is a simple way to evaluate the quality of its architecture design[[7]]. The *Single-Responsibility Principle* of OCP says that 

> “A class should have only one reason to change”[[8]]. 

Furthermore, software entities should be “*open for extension but close for modification*". That is to say, a well designed software should have as less modification as possible when a new feature is supposed to be added. In this regard, we can derive the following model to evaluate the quality of architecture design [[9]].

$$
freq = N/M
$$
**Where:**
$M$ is the number of commits in which features were added
$N$ is the number of commits where changes took place while adding features

As we can see, $N$ is a subset of $M$, therefore, the range should be within 0–1. From the OCP rules, we can deduce that the lower the frequency is, the better architecture is designed.


|**Open Source Projects**        |**$freq$**|
|--------------------------------|---------------|
|Ruby Programming Language       | 0.6387|
|Publisher                       | 0.5783|
|Gov.UK Frontend                 | 0.5333|
|Gov.UK Transition               | 0.6729|
|Gov.UK Collections              | 0.4815|
|Gov.UK EFG                      | 0.7132|
|Gov.UK Rummager                 | 0.7244|
|Gov.UK Signonotron2             | 0.4865|

[Table 1: shows the model being applied to various open source projects with $freq$.]


From the table above, we can observe that although these projects have been open source for years and supposed to be well structured [[8]]. However, the $freq$ value suggests that none of these projects has followed the OCP rules strictly. Nevertheless, I believe that there may be other factors that influence this value. For example, a developer forgets to commit right after he/she has added some features but directly modified other classes to fix some bugs, and then commit all the changes at one time. Relatively, the project [Signonotron2](https://github.com/alphagov/signonotron2) should have a better design. Compared with other projects, generally, publisher has a good architecture according to OCP rules [[7]].

Although, I think this model is only theoretically effective, due to accidental and essential complexity [[7]]. It is still a straight-forward method to do the evaluation job which inversely helps refining the architecture design.

The little script below which was written in Java shows how the **$freq$** was produced. The input to the script is a *csv* file containing all commit hashes of the particular project of version control system. You can get all the commit hashes from the git repository using the command:

> `git log -n 1 --pretty=format:"%H" > commit-hashes.txt`


```java{numberLines: true}
import java.io.*;
import java.util.ArrayList;

public class Main {
    // store all the hash-status
    static ArrayList al = new ArrayList(); 
    // store that contains unique hash whose commit added something
    static ArrayList addArray = new ArrayList();
    // store that contains unique hash whose commit changed something after
    static ArrayList changeArray = new ArrayList();

    public static void main(String[] args) {
        readData();
        calcAdds();
        calcChangesInAdds();
        // get ratio, the lower the better architecture.
        // since if well formed, theoretically, 
        //adding features doesn't require any modification
        System.out.println("The ratio is: " + 
        (1.0 * changeArray.size() / addArray.size()));
    }

    private static void readData(){
            File file = new File("./signonotron2.csv");
        BufferedReader reader;
        try{
            reader = new BufferedReader(new FileReader(file));
            String tempString;
            while((tempString = reader.readLine()) != null){
                al.add(tempString);
            }
        }catch (Exception ex){

        }
    }

    /**
     * get the hashes of all commits that had added some features
     */
    private static void calcAdds(){
        for(int i =0; i<al.size();i++){
            String line = al.get(i).toString();
            String hash = line.substring(0,line.indexOf('\t'));
            String status = line.substring(line.indexOf('\t')+1, line.length());
            if(!addArray.contains(hash) && status.equals("added")){
                addArray.add(hash);
            }
        }
    }

    /**
     * get the hashes of all commits that had changed something after adding features
     */
    private static void calcChangesInAdds(){
        for(int i =0; i<al.size();i++){
            String line = al.get(i).toString();
            String hash = line.substring(0,line.indexOf('\t'));
            String status = line.substring(line.indexOf('\t')+1, line.length());
            if(addArray.contains(hash) && status.equals("changed") && !changeArray.contains(hash)){
                changeArray.add(hash);
            }
        }
    }
}
```

Anyhow, I hope you enjoyed reading this. Feel free to comment any suggestions you have or as matter of fact anything you want to ask me. Cya next time!

  [1]: http://swerl.tudelft.nl/twiki/pub/Main/KoenEgelink/Masters_Thesis_Koen_Egelink_PUBLIC_BANNER.pdf "K. Egelink, Multi-Version Software Analysis to Detect Architectural Mismatches."
  [2]: http://www.amazon.co.uk/The-Pragmatic-Programmer-Andrew-Hunt/dp/020161622X "A. Hunt and D. Thomas, The Pragmatic Programmer: From Journeyman to Master."
  [3]: http://dl.acm.org/citation.cfm?id=578522 "Structured design : fundamentals of a discipline of computer program and systems design"
  [4]: https://github.com/acaudwell/Gource "Gource"
  [5]: http://dl.acm.org/citation.cfm?id=2656440 "Software architecture model driven reverse engineering approach to open source software development"
  [6]: https://www.youtube.com/watch?v=Nm8RbKennWg "Gource on publisher alphagov"
  [7]: https://worrydream.com/refs/Brooks-NoSilverBullet.pdf "Essence and accidents of software engineering"
  [8]: https://www.gov.uk/service-manual/making-software/open-source.html "Using open source software"
