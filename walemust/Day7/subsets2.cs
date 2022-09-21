 public IList<IList<int>> SubsetsWithDup(int[] nums) {
        
        Array.Sort(nums); 

        var res = new List<IList<int>>();
        Backtrack(nums, 0, new List<int>(), res);
        return res;
    }


static void Backtrack(int[] n, int idx, List<int> branch, List<IList<int>> res)
{
	res.Add(branch);

	for (int i = idx; i < n.Length; i++)
	{
		// skip if the same value was just used before
		if (i > 0 && i != idx && n[i] == n[i - 1])
			continue;

		branch.Add(n[i]);
		Backtrack(n, i + 1, new List<int>(branch), res);
		branch.Remove(n[i]);
	}

    }